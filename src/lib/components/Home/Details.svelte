<script>
	export let basicInfo;
</script>

<div class="skills">
	<div class="code">
		<span class="identifier">class</span>
		<span>BasicInfos &lbrace;</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span class="identifier">String</span>
		<span class="variable">name</span>
		<span>;</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span class="identifier">String</span>
		<span class="variable">email</span>
		<span>;</span>
	</div>
	<div class="code" />
	<div class="code">
		<span class="move-1" />
		<span class="identifier">BasicInfos()</span>
		<span>&lbrace;</span>
	</div>
	<div class="code">
		<span class="move-2" />
		<span class="this">this.</span>
		<span class="variable">name</span>
		<span class="equals" />
		<span class="assignment">"{basicInfo.name}";</span>
	</div>
	<div class="code">
		<span class="move-2" />
		<span class="this">this.</span>
		<span class="variable">email</span>
		<span class="equals" />
		<span class="assignment">"{basicInfo.email}";</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span>&rbrace;</span>
	</div>
	<div class="code" />
	<div class="code">
		<span class="move-1" />
		<span class="identifier">public</span>
		<span>Map&lt;String,String&gt;&ensp;</span>
		<span class="method">getEducation</span>
		<span>&lbrace;</span>
	</div>
	<div class="code">
		<span class="move-2" />
		<span>Map&lt;String,String&gt;&ensp;</span>
		<span class="variable">education</span>
		<span class="equals" />
		<span class="identifier">new</span>
		<span>HashMap&lt;&gt;;</span>
	</div>
	{#each basicInfo.education as education}
		<div class="code">
			<span class="move-2" />
			<span class="variable">education</span>
			<span>.put&lpar;</span>
			<span class="assignment">"{education.date}"</span>
			<span>,&ensp;</span>
			<span class="assignment">"{education.details}"</span>
			<span>&rpar;;</span>
		</div>
	{/each}

	<div class="code">
		<span class="move-2" />
		<span class="identifier">return</span>
		<span class="variable">education</span>
		<span>;</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span>&rbrace;</span>
	</div>
	<div class="code" />
	<div class="code">
		<span class="move-1" />
		<span class="identifier">public</span>
		<span>Map&lt;String,String&gt;&ensp;</span>
		<span class="method">getWorkExperience</span>
		<span>&lbrace;</span>
	</div>
	<div class="code">
		<span class="move-2" />
		<span>Map&lt;String,String&gt;&ensp;</span>
		<span class="variable">workExp</span>
		<span class="equals" />
		<span class="identifier">new</span>
		<span>HashMap&lt;&gt;;</span>
	</div>

	{#each basicInfo.work_exp as workExp}
		<div class="code">
			<span class="move-2" />
			<span class="variable">workExp</span>
			<span>.put&lpar;</span>
			<span class="assignment">"{workExp.date}"</span>
			<span>,&ensp;</span>
			<span class="assignment">"{workExp.details}"</span>
			<span>&rpar;;</span>
		</div>
	{/each}

	<div class="code">
		<span class="move-2" />
		<span class="identifier">return</span>
		<span class="variable">workExp</span>
		<span>;</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span>&rbrace;</span>
	</div>
	<div class="code" />

	<div class="code">
		<span class="move-1" />
		<span class="identifier">public</span>
		<span>String&lbrack;&rbrack;&ensp;</span>
		<span class="method">getSkills</span>
		<span>&lbrace;</span>
	</div>
	<div class="code">
		<span class="move-2" />
		<span class="identifier">return</span>
		<span class="identifier">return</span>
		<span>String&lbrack;&rbrack;&ensp;</span>
		<span>&lbrace;&ensp;</span>

		<span class="assignment">
			{#each basicInfo.skills as skill, i}
				"{skill}"
				{#if i < basicInfo.skills.length - 1}
					<span class="clear">,&ensp;</span>
				{/if}
			{/each}
		</span>
		<span>&rbrace;;</span>
	</div>
	<div class="code">
		<span class="move-1" />
		<span>&rbrace;</span>
	</div>
	<div class="code"><span>&rbrace;</span></div>
</div>

<style>
	:root {
		--identifierColour: #e06b75;
		--tagColour: #8e94a1;
		--equals: #abb2bf;
		--valColour: #92ba76;
		--codeBg: #282c34;
		--lineColours: #363c49;
		--commentColour: #6a7181;
		--linkColour: #56b6c2;
		--hoverColour: #518bff;
	}

	.skills {
		padding: 5vh;
		position: relative; /* Add this line */
		background-color: var(--primary-color);
		margin-bottom: 10vh;
		border: 2px solid var(--secondary-color);
		box-shadow: inset 1px 1px 1px 1px #000000;
		counter-reset: lines;
	}

	.code {
		font-size: 0;
	}

	.code > span {
		font-size: 1rem;
	}

	.code::before {
		font-size: 1rem;
		display: inline-block;
		color: var(--tagColour);
		counter-increment: lines;
		content: counter(lines, decimal-leading-zero);
		margin-right: 2vh;
	}

	.clear {
		color: var(--primary-text-color);
	}

	.move-1 {
		padding-left: 2rem;
	}

	.move-2 {
		padding-left: 4rem;
	}

	.identifier {
		color: var(--identifierColour);
	}

	.identifier::after {
		content: '\00a0';
	}

	.this {
		color: var(--identifierColour);
	}

	.variable {
		color: var(--linkColour);
	}

	.equals::after {
		content: '\00a0=\00a0';
	}

	.method::after {
		content: '\00a0';
	}

	.assignment {
		color: var(--valColour);
	}

	.code:hover {
		background-color: var(--lineColours);
	}
</style>
