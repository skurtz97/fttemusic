<script lang="ts">
  let nameVal = "";
  let emailVal = "";
</script>

<form>
  <label for="name">First Name (Required)</label>
  <input name="name" placeholder="Name" required={true} bind:value={nameVal} />
  <label for="email">Email Address (Required)</label>
  <input name="email" placeholder="Email" required={true} bind:value={emailVal} />
  <button class="btn">Sign up</button>
</form>
