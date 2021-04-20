<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5">
    <h1>Send Mail</h1>
    <form action="send_email_html.php" method="POST">
        <div class="form-group">
            <label for="exampleInputPassword1">Subject</label>
            <input required type="text" name="subject" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">To Email address</label>
            <input required type="email" name="to_email_address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="to_name">TO Name</label>
            <input required type="text" name="to_name" class="form-control" id="to_name">
        </div>
        <div class="form-group">
            <label for="content">Content</label>
            <textarea required type="text" name="content" class="form-control" id="content"></textarea>
        </div>
        <div class="form-group form-check">
            <input value="true" type="radio" name="cv" class="form-check-input" id="exampleCheck1" checked>
            <label class="form-check-label" for="exampleCheck1">Include CV</label>
        </div>
        <div class="form-group form-check">
            <input value="false" type="radio" name="cv" class="form-check-input" id="exampleCheck2">
            <label class="form-check-label" for="exampleCheck2">Dont Include CV</label>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Send mail</button>
    </form>
</div>
</body>
</html>
