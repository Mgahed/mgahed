<html> <!-- #A3D0F8 -->
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
	<body style="color: #000; font-size: 16px; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #efefef;">

		<div id="wrapper" style="max-width: 100%; margin: auto auto; padding: 20px;">

			<div id="logo" style="">
				<!-- <center> -->
					<a href="{SITE_ADDR}" target="_blank"><img src="{EMAIL_LOGO}" alt="personal-photo" class="img-fluid rounded-circle" style="margin: 15px auto;/* display: block; */width: 90px;border: 3px solid #A3D0F8;border-radius: 50%!important;max-width: 70%;height: auto;"></a>
				<!-- </center> -->
			</div>

			<div id="content" style="font-size: 16px; padding: 25px; background-color: #fff;
				moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; -khtml-border-radius: 10px;
				border-color: #A3D0F8; border-width: 4px 1px; border-style: solid;">

				<h1 style="font-size: 22px;"><center>{EMAIL_TITLE}</center></h1>

				<p>Dear {TO_NAME},</p>

				<p>I hope this email finds you well!.</p>

				<p>{Content}</p>

				<!-- <p>You can send these custom HTML emails from a localhost web server or a paid web host, like BlueHost.
				Really from anywhere you want. All with just a little bit of code. I even made it with a simple template system.</p> -->

				<p>Thanks.</p>
				<p>Regards.</p>

                <script>
                    if({cv}){
                        document.write('<p style="display: flex; justify-content: center; margin-top: 10px;"><center> <a href="{CUSTOM_URL}" target="_blank" style="/* border: 1px solid #0561B3; */background-color: #238CEA;color: #fff;text-decoration: none;font-size: 18px;padding: 10px 20px;border-radius: 12px;">Download CV</a></div> </center></p>');
                    }
                </script>
				

			</div>

			<div id="footer" style="margin: 20px;/*background: #EFEFEF;*/margin-bottom: 20px;padding: 6px 8px;/* text-align: center; */">
				<a href="{SITE_ADDR}" target="_blank"><img style="width: 30px; margin-right:10px;" src="https://img.icons8.com/dusk/64/000000/domain.png" alt="personalWebsite"></a>
				<a href="https://www.linkedin.com/in/abdelrhman-mgahed-19a8b9143/" target="_blank"><img style="width: 30px; margin-right:10px;" src="https://www.africabaie.com/wp-content/uploads/2020/10/Linkedin-Logo-Africabaie.png" alt="linkedin"></a>
				<a href="https://github.com/Mgahed" target="_blank"><img style="width: 30px; margin-right:10px;" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github"></a>
				<!-- even add footer links to your <a href="https://www.heytuts.com/web-dev" target="_blank" style="text-decoration: none; color: #238CEA;">website</a> from these emails -->
			</div>
		</div>
	</body>
</html>
