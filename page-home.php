<?php
/*
Template Name: Home Page
 */
get_header(); ?>

<section id="home-page">
	
	<img src="<?php bloginfo('stylesheet_directory'); ?>/build/img/logo.jpg" alt="logo" class="logo">

	<div class="info-box">
		<p class="info">5143 Boulevard D&eacute;carie</p>
		<p class="info">Montr&eacute;al, QC H3W 3C2</p>
		<p class="info">514 486 5542</p>
	</div>

	<table>
			<!-- <th>Heures d'Ouverture</th> -->
			<!-- <caption>Heures d'Ouverture</caption> -->
			<tr>
				<td>L</td>
				<td>M</td>
				<td>M</td>
				<td>J</td>
				<td>V</td>
				<td>S</td>
				<td>D</td>
			</tr>
			<tr>
				<td class="hour">9h - 20h</td>
				<td class="hour">9h - 20h</td>
				<td class="hour">9h - 20h</td>
				<td class="hour">9h - 21h</td>
				<td class="hour">9h - 21h</td>
				<td class="hour">9h - 18h</td>
				<td class="hour">10h - 18h</td>
			</tr>
		</table>

</section><!-- #home-page -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>