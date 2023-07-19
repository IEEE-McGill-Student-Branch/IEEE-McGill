<script lang="ts">
	export let memberID: string;
</script>

<article class="member" id="{memberID}">
	<div>
		<slot class="profilepic" name="profilepic">
			<span class="missing">N/A</span>
		</slot>
		<slot class="name" name="name">
			<span class="missing">Who?</span>
		</slot>
		<slot name="pronouns">
			<span class="missing">N/A</span>
		</slot>
	</div>
	

	<div class="role">
		<slot name="role">
			<span class="missing">Role?</span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">Email?</span>
		</slot>
	</div>

	<div class="moreInfo">
		<slot name="moreInfo">
			<span class="missing">More info?</span>
		</slot>
	</div>
</article>

<style lang="postcss">
	* {
		transition: all 1s ease-in-out;
	}

	.member {
		width: 500px;
		border: #ff505094 2px solid;
		border-radius: 10px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin: 2rem 2rem;
	}

	.name {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #ff3e00;
	}

	.role,
	.email {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}

	.missing {
		color: #999;
	}

	.moreInfo {
		visibility: hidden;
		transition: all 1s ease-in-out;
	}

	.member:hover > .moreInfo {
		cursor: pointer;
		visibility: visible;
	}
</style>

