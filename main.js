fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Email</th> <th>Phone</th><th>Website</th></tr>`;
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id}</td>
				<td>${user.name} </td>
        <td>${user.username}</td>
				<td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
			</tr>`;
    });

    document.getElementById("users").innerHTML = li;
  });
