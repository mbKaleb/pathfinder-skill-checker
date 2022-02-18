.sheet {
    border: solid;
    border-color: #ffcb05;
    padding: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 30px;
    float: left;
    text-align: center;
    width: 400px;
    height: auto;
  }

.character-sheet {
    background-color: #1B1717;
    padding: 0;
    transition: 0.3s;
    margin-left: 16px;
    float: left;
    text-align: center;
    width: calc(25% - 6px);
    height: auto;
  }

	@@ -32,15 +30,14 @@

.skilldiv {
  float: left;
    text-align: left;
    list-style-type: none;
}

.skill-list {
  list-style-type: none;
  height: 28px;
  padding: 4px
}
.temporary-mod-label {
  width: 50px;
	@@ -171,7 +168,7 @@ body {
  width: 100%;
  height: 84px;
  background-color:#110C0A;
  margin: 16px;
}

.regularButton {
	@@ -306,15 +303,62 @@ h2 {
  float: left;
  margin-top: 8px;
}
li.critical-success {
  background-color: #64DD17;
}
li.success {
  background-color: #AED581;
}
li.failure {
  background-color: #E57373;
}
li.critical-failure {
  background-color: #D50000;
}----
.skill-label {
  font-size: 16px;
  width: 25%;
  float: left;
  margin-left: 10%;
  font-weight: bold;

}
.training-label {
  font-size: 16px;
  width: 15%;
  text-align: center;
  font-weight: bold;
}
.skill-total-label {
  font-size: 16px;
  width: 15%;
  text-align: center;
  font-weight: bold;
}
.temporary-mod-label {
  font-size: 16px;
  margin-left: 5%;
  margin-right: 5%;
  width: 10%;
  text-align: center;
  height: 90%;
  font-weight: bold;
}
.skill-roll {
  font-size: 16px;
  width: 15%;
  text-align: center;
  font-weight: bold;
}
.odd {
  background-color: #bca789;
}
.even {
  background-color: #d2c4a5;
}
li.perception {
  border-top: #363837;
  border-bottom: #363837;
  border-width: 8px 0px;
  border-style: solid;
}