/**
 * Utility functions to extract structured data from resume JSON records
 */

export function parseSkillRow(row) {
  const match = row.name.match(/<strong>(.*?)<\/strong>:?\s*(.*)/i);
  if (match) {
    const category = match[1].replace(':', '').trim();
    const items = match[2]
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    return { key: row.key, category, items, raw: row.name };
  }
  return { key: row.key, category: 'General', items: [row.name], raw: row.name };
}

export function parseJobDates(jobDatesHtml) {
  // Typical format: <em>Plus500 <small>(2018 - present day)</small></em>
  // or: <em>Marvilix, development team. <small>(2016 - 2017)</small></em>
  const match = jobDatesHtml.match(/<em>(.*?)\s*<small>\((.*?)\)<\/small><\/em>/i);
  if (match) {
    return {
      company: match[1].replace(/,\s*$/, '').trim(),
      period: match[2].trim(),
      raw: jobDatesHtml
    };
  }
  return {
    company: '',
    period: '',
    raw: jobDatesHtml
  };
}

export function parseCourseTitle(courseTitle) {
  // Format: "IT-Window, Java / Android development, Course Diploma"
  const parts = courseTitle.split(',').map(p => p.trim());
  if (parts.length >= 2) {
    return {
      institution: parts[0],
      subject: parts[1],
      credential: parts.slice(2).join(', ') || 'Diploma'
    };
  }
  return {
    institution: courseTitle,
    subject: '',
    credential: 'Certification'
  };
}
