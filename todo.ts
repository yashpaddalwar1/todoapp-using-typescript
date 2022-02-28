
const form1 = document.querySelector("#addForm") as HTMLFormElement;
let items = document.getElementById("items");
let submit = document.getElementById("submit") as HTMLButtonElement;
let editItem = null;
form1.addEventListener("submit", addItem);
items.addEventListener("click", removeItem);

function addItem(e: Event) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= (document.getElementById("item") as HTMLInputElement).value;

		submit.value = "Submit";
		(document.getElementById("item") as HTMLInputElement).value = "";
		document.getElementById("lblsuccess").innerHTML = "Text edited successfully";
		document.getElementById("lblsuccess").style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess").style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = (document.getElementById("item") as HTMLInputElement).value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		(document.getElementById("item") as HTMLInputElement).value = "";

	let li = document.createElement("li") as HTMLLIElement;
	li.className = "list-group-item";

	let deleteButton = document.createElement("button") as HTMLButtonElement;

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button") as HTMLButtonElement;

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		(document.getElementById("item") as HTMLInputElement).value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	(document.getElementById(btnID) as HTMLButtonElement).disabled = false;
}
