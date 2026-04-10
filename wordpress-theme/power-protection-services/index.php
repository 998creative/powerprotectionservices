<?php
/**
 * Index fallback template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

get_header();
?>
<section class="pps-section pps-section-light">
    <div class="pps-container pps-prose">
        <h1><?php echo esc_html(pps_page_heading('Power Protection Services')); ?></h1>
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <?php the_excerpt(); ?>
                </article>
            <?php endwhile; ?>
            <?php the_posts_pagination(); ?>
        <?php else : ?>
            <p>No content found.</p>
        <?php endif; ?>
    </div>
</section>
<?php
get_footer();
