<?php require("database.php"); ?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Marvel Game!</title>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lato:100|Ubuntu+Condensed" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="author" href="humans.txt">
    </head>
    <body>
        <header>
            <div class="text-center">
                <h1>MARVEL GAME</h1>
                <h2>INITIATE = SPACE BAR</h2>
            </div>  
        </header>
        <main>
            <div class="container">
              <div id="action-zone" class="row">
                  <div class="col-xs-12 col-md-4 absolute-center">
                      <div id="stop-watch">
                          <img id="watch" class="absolute-center" src="images/stop_watch.png" />
                          <img id="pointer" class="absolute-center" src="images/pointer.png" />
                          <input name="time-run" type="hidden" value="" />
                      </div>  
                      <a id="rocket" class="click-zone"></a>
                      <a id="lamp" class="click-zone"></a>
                      <a id="vitro" class="click-zone"></a>                   
                  </div>                 
              </div>
              <div class="stopwatch text-center hidden">
               <span id="sw_s"></span><span id="sw_ms"></span>               
              </div>
            </div>             
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div id="high_scores" class="col-xs-12">
                       <h3>HIGH SCORES TABLE</h3>
                       
                       <div id="results" class="clearfix">
                           <button type="button" class="btn btn-default" data-results="d">Today</button>
                           <button type="button" class="btn btn-default" data-results="m">Month</button>
                           <button type="button" class="btn btn-default" data-results="Y">Year</button>
                           <button type="button" class="btn btn-default" data-results="ever">Ever!</button>
                       </div>
                       
                       <table width="100%" cellpadding="5" align="center" class="table table-responsive table-condensd table-hover table-bordered">
                           <thead>
                               <tr>
                                   <th>
                                       <a class="orderBy" data-sortby="score_date">DATE</a>
                                   </th>
                                   <th>
                                       <a class="orderBy" data-sortby="player_name">NAME</a>
                                   </th>
                                   <th>
                                       <a class="orderBy" data-sortby="score_time">SCORE</a>
                                   </th>
                                   <th>GRAPH</th>
                               </tr>
                           </thead>
                           <tbody id="scores">
                             <?php getHighScores(); ?>
                           </tbody>
                       </table>
                       
                    </div> 
                </div>
             </div>  
             <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title"></h4>
                  </div>
                  <div class="modal-body"></div>                 
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </footer>
        <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/stopwatch.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/jquery.tablesorter.min.js"></script>    
        
    </body>
</html>