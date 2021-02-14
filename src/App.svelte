<script>
	let people = [{ name: "test", age: "26", city: "test" }];
	let showEdit = false;

	let newPerson = {
		name: "",
		age: "",
		city: "",
	};

	function addPerson() {
		people = [...people, newPerson];

		showEdit = false;
	}

	function cancel() {
		newPerson.name = "";
		newPerson.age = "";
		newPerson.city = "";
		showEdit = false;
	}

	function show() {
		showEdit = true;
	}
</script>

<main>
	<h1>Smoelenboek</h1>
	<div>
		<p>Voeg iemand toe!</p>
		{#if !showEdit}
			<button id="expand-add-person" on:click={show}>Toevoegen</button>
		{/if}
		{#if showEdit}
			<div class="edit">
				<label>
					<strong>Naam:</strong><br />
					<input
						id="add-person-name"
						type="text"
						bind:value={newPerson.name}
					/>
				</label>
				<label>
					<strong>Leeftijd:</strong><br />
					<input
						id="add-person-age"
						type="text"
						bind:value={newPerson.age}
					/>
				</label>
				<label>
					<strong>Woonplaats:</strong><br />
					<input
						id="add-person-city"
						type="text"
						bind:value={newPerson.city}
					/>
				</label>
				<button id="cancel-add-person" on:click={cancel}>Annuleer</button>
				<button id="confirm-add-person" on:click={addPerson}>Toevoegen</button>
			</div>
		{/if}
	</div>
	<div>
		<ul id="people-list">
			{#each people as person}
				<li>{person.name} - {person.age} - {person.city}</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.edit {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}
	ul {
		list-style: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
