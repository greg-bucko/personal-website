<?php
    $curl = curl_init();

    // OPTIONS
    curl_setopt($curl, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, "secret=6LeVxnAUAAAAAE5kF2X7atAaD8Nru65fd2Jh6PDA&response={$_GET["response"]}");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    // EXECUTE
    $result = curl_exec($curl);

    curl_close($curl);

	$response = json_decode($result, true);

	$output->captcha = $response;

	if($response['success'] and $_GET["name"] && $_GET["email"] && $_GET["message"]) {
		$msg = wordwrap("Name: " + $_GET["name"] + "\nEmail: " + $_GET["email"] + "\nMessage: " + $_GET["message"], 70);

      	if (!mail("contact@gregbucko.com", "Contact form", $msg)) {
			http_response_code(500);
          
          	$output->mail = array(
              "success" => false
            );
		} else {
            http_response_code(200);

            $output->mail = array(
              "success" => true
            );
        }

        echo json_encode($output);
	} else {
		http_response_code(400);
        $output->mail = array(
          "success" => false
		);
        echo json_encode($output);
	}
?>