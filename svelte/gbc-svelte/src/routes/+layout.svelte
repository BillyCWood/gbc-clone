<script lang="ts">
    import Header from "../components/Header.svelte";
    let { children } = $props();
</script>

<header>
    <Header />
</header>

<main>{@render children()}</main>

<footer>
    foot
</footer>


<style>
	@import url('https://fonts.googleapis.com/css?family=Poppins:400,700,900');
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap');

	:global {
		:root{
			background-color: #eee;
			margin: 0;
			padding: 0;
			font-family: Poppins;
			text-align: left;
		}

		body {
			max-width: 1239px;
			margin: 0 auto;
			padding: 0;
		}

		main {
			margin: 0;
			padding: 0;
            background-color: white;
		}

		a {
			text-decoration: none;
		}
	}

    footer{
        background-color: #4C4C4C;
        color: white;
    }
</style>