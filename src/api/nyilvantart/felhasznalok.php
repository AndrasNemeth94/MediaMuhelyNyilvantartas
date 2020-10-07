<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: *');
	
		$link = mysqli_connect("localhost", "root", "", "nyilvantart");
		$userObj = mysqli_query($link, 'SELECT * FROM user WHERE NOT neptun = \'\' ORDER BY username');
			
		
		if(isset($_POST['edit'])){

			$username = $_POST['username'];
			$nev = $_POST['nev'];
			$neptun = $_POST['neptun'];
			$email = $_POST['email'];
			$csapat = $_POST['csapat'];
            $jelszo = $_POST['jelszo'];
            
			if($jelszo != NULL){
				$update = "UPDATE felhasznalok SET username ='$username', nev = '$nev', email = '$email', csapat = '$csapat', regE = 2 WHERE neptunKod = '$neptun'";
				mysqli_query($link, $update);
				header('Refresh: 0');
			}else {
				$update = "UPDATE felhasznalok SET username ='$username', nev = '$nev', email = '$email', csapat = '$csapat', regE = 2, jelszo = 'jelszo' WHERE neptunKod = '$neptun'";
				mysqli_query($link, $update);
				header('Refresh: 0');
			}
			
		}
		if(isset($_POST['delete'])){
			$username = $_POST['username'];
			$nev = $_POST['nev'];
			$neptun = $_POST['neptun'];
			$email = $_POST['email'];
			$csapat = $_POST['csapat'];
			if($neptun == ""){
				echo "üres mező";
			}else{
				$delete = "DELETE FROM felhasznalok WHERE neptunKod = '$neptun'";
				mysqli_query($link, $delete);
				header('Refresh: 0');
			}
		}
		if(isset($_POST['add'])){
			$nepK = strtoupper($_POST['nepK']);
			$addNep = "SELECT * FROM felhasznalok WHERE neptunKod = '$nepK'";
			$result = mysqli_query($link, $addNep);
			
			if(mysqli_num_rows($result) > 0){
				echo "Már van ilyen neptunkód";
			}else if(empty($nepK)){
				echo "Üres mező";
			}else if(strlen($nepK) != 6){
				echo "Helytelen neptunkód";
			}
			else {
				
				$ujNepKod = "INSERT INTO felhasznalok (neptunKod) VALUES ('$nepK')";
				if (mysqli_query($link, $ujNepKod)) {
					echo "Sikeres felvétel";
					header('Refresh: 0');
				} else {
					echo "Error: Nem sikerült a felvétel: " . mysqli_error($link);
				}
			}
		}
		if(isset($_POST['vissza'])){
			header("Location: index3.php");
			exit();
		}
		
        finally{

            mysqli_close($link);
        }
		
		/*<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
		  <fieldset>
			<label class="login">Új neptunKód:</label><input type="text" name="nepK" /><br />
			<input class="gomb" type="submit" name="add" value="Add" />
		  </fieldset>
		</form>
		
		<br><br>

        <div class="container">
            <div class="tab tab-1">
                <table id="table" border="1">
				<thead>
  <tr>
    <th>Username</th>
    <th>Név</th>
    <th>Neptun</th>
    <th>Email</th>
    <th>Csapat</th>
  </tr>
  </thead>*/
					
						/*while($row = mysqli_fetch_array($userObj)){ ?>
						<tr>	
							<td><?php echo $row['username']?></td>
							<td><?php echo $row['nev']?></td>
							<td><?php echo $row['neptunKod']?></td>
							<td><?php echo $row['email']?></td>
							<td ><?php echo $row['csapat']?></td>
							<td style="display:none;"><?php echo $row['jelszo']?></td>
						</tr>
					<?php } ?>
                </table>
            </div>
            <div class="tab tab-2">
			
			<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
			  <fieldset>
				<label class="login">Felhasználónév :</label><br><input type="text" name="username" id="username" /><br />
				<label class="login">Teljes név :</label><br><input type="text" name="nev" id="nev" /><br />
				<label class="login">Neptun Kód :</label><input type="text" name="neptun" id="neptun" /><br />
				<label class="login">Email :<input type="text" name="email" id="email" /><br />
				<label class="login">Csapat :<input type="text" name="csapat" id="csapat" /><br />
				<input type="text" name="jelszo" id="jelszo" style="display:none;"/><br />
				<br>
				<input class="gomb" type="submit" name="edit" value="Update" />
				<input class="gomb" type="submit" name="delete" value="Delete" />
				<input type="submit"  name="vissza" value="Vissza" />
			  </fieldset>
			</form>
                
            </div>
        </div>
        
        <script>
            
            var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    username = document.getElementById("username").value,
                    nev = document.getElementById("nev").value,
                    neptun = document.getElementById("neptun").value,
                    email = document.getElementById("email").value,
                    csapat = document.getElementById("csapat").value;

                if(username === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(nev === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(neptun === ""){
                    alert("neptun Connot Be Empty");
                    isEmpty = true;
                }else if(email === ""){
                    alert("email Connot Be Empty");
                    isEmpty = true;
                }else if(csapat === ""){
                    alert("csapat Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("username").value = this.cells[0].innerHTML;
                      document.getElementById("nev").value = this.cells[1].innerHTML;
                      document.getElementById("neptun").value = this.cells[2].innerHTML;
                      document.getElementById("email").value = this.cells[3].innerHTML;
                      document.getElementById("csapat").value = this.cells[4].innerHTML;
                      document.getElementById("jelszo").value = this.cells[5].innerHTML;

                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var username = document.getElementById("username").value,
                    nev = document.getElementById("nev").value,
                    neptun = document.getElementById("neptun").value,
                    email = document.getElementById("email").value,
                    csapat = document.getElementById("csapat").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = username;
                table.rows[rIndex].cells[1].innerHTML = nev;
                table.rows[rIndex].cells[2].innerHTML = neptun;
                table.rows[rIndex].cells[3].innerHTML = email;
                table.rows[rIndex].cells[4].innerHTML = csapat;
              }
            }
            
            function removeSelectedRow()
            {
				if(!checkEmptyInput()){
                table.deleteRow(rIndex);
                document.getElementById("username").value = "";
                document.getElementById("nev").value = "";
                document.getElementById("neptun").value = "";
                document.getElementById("email").value = "";
                document.getElementById("csapat").value = "";
				}
            }
        </script>
        
    </body>
</html>*/
mysqli_close($link);
?>