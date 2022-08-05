<html>

<body>

  <?php
  //db connection variables
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "robo";
  //table variables
  //   $result= $_POST["value"];
  //     echo $_POST["value"];
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  if (isset($_POST['value'])) {
    $result = $_POST['value'];


    // Create connection


    //   query
    //   $sql ="UPDATE servomove SET movement = $result WHERE id = 1";
    $sql = "UPDATE servomove SET movement='$result' WHERE id=1";
    // report on connection error
    if ($conn->query($sql) === false) {
      echo "Error query : " . $conn->error;
    } else {
      // 	echo $result;
    }
  }
  $sql = "SELECT movement FROM servomove";
  if ($conn->query($sql) === false) {
    echo "Error query : " . $conn->error;
  } else {
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        echo $row["movement"];
      }
    } else {
      echo "0 results";
    }
  }

  //printing

  ?>




</body>

</html>