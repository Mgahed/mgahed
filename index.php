<!--<html>
    <head>
        <title>Domain Availability Checker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"/>
        <link rel="icon" href="m.png">
    </head>

    <style>
    .footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
}
            body, h2, h3 {
                font-weight: normal;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                color: #333;
            }
            
            h2 {
                font-size: 26px;
                text-align: center;
            }
            h3 {font-size: 24px; }
            h3.success {
                color: #008000;
                text-align: center;
            }
            h3.fail {
                color: #ff0000;
                text-align: center;
            }
            .container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            
            .btn-search {
                cursor: pointer;
                text-decoration: none !important;
                font-size: 1.5em;
                padding-top: 5px;
                padding-bottom: 5px;
                background-color: transparent;
                border: none;
                outline: none;
            }
            .searchbar {
                height:50px;
                width:80%;
                
                border: none;
                font-size: 19px;
                border-bottom: #ADD8E6 solid 3px;
                
            }
        </style>

    <body>
    <br><br>
        <div class="wrapper">
            <h2>Check Domain Name Availability</h2>
            <br>
            <div class="container">
                <form action="?" method="post">
                    <input id="searchBar" class="searchbar" type="text" name="domain" placeholder="Enter domain name..." value="<?php if(isset($_POST['domain']                    )){ echo $_POST['domain']; } ?>">
                    <button type="submit" id="btnSearch" class="btn-search"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <?php
                
                error_reporting(0);
                if(isset($_POST['domain'])){
                    $domain = $_POST['domain'];
                    if ( gethostbyname($domain) != $domain ) {
                        echo "<h3 class='fail'>(" . $domain . ") Domain Already Registered!</h3>";
                    }
                    else {
                        echo "<h3 class='success'>(" . $domain . ") domain is available.<br> you can buy it from here => <a href='https://www.godaddy.com/'>godaddy</a></h3>";
                    }
                }
            ?>
        </div>

        <div class="footer">
            <p>© abdelrhmanmgahed131@gmail.com</p>
        </div>

        
        
    </body>
</html>-->

<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mgahed Tic Tac Toe</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="Part4_GameCSS.css">
    <link rel="icon" href="m.png">
  </head>

  <body>
    <div class="container">


  <div class="jumbotron">
    <h1>Welcome to Tic Tac Toe!</h1>

  <p><a id='b' class="btn btn-primary btn-lg" href="#" role="button">Restart!</a></p>
</div>
    <table align='center'>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>

    </table>

<br><br>
   <script type="text/javascript" src='Part4_Game.js'></script>
   </div>
  </body>

</html>
