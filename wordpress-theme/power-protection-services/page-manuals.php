<?php
/**
 * Manuals page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Manuals';
$title = 'Manuals Library';
$description = 'Search by brand or model and download the manuals you need fast.';
$hero_background = 'hero/hero-datacenter-blue.jpg';
$hero_actions = [
    [
        'label' => 'Need Help Choosing a Manual?',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Support & Aftercare Services',
        'href' => home_url('/support/'),
        'primary' => false,
    ],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container">
        <p class="pps-eyebrow">Manuals Database</p>
        <h2>Browse by brand, then search by model</h2>
        <p class="pps-section-intro">Use the search and filters to quickly find the exact PDF you need, then open or download it instantly.</p>

        <div class="pps-manuals" data-manuals-root>
            <div class="pps-manuals-filters">
                <div class="pps-manuals-header">
                    <p class="pps-eyebrow">Search Manuals</p>
                    <p class="pps-manuals-count" data-manuals-count>0 manuals found</p>
                </div>

                <label class="pps-manuals-search-label" for="pps-manual-search">
                    <input id="pps-manual-search" type="search" placeholder="Search by model, brand, or category" data-manuals-search />
                </label>

                <div class="pps-manuals-filter-grid">
                    <div>
                        <p class="pps-eyebrow">Filter by Brand</p>
                        <div class="pps-chip-group" data-manuals-brands></div>
                    </div>
                    <div>
                        <p class="pps-eyebrow">Filter by Type</p>
                        <div class="pps-type-row">
                            <select data-manuals-types aria-label="Filter manuals by type"></select>
                            <button type="button" class="pps-btn pps-btn-ghost" data-manuals-clear>Clear all filters</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pps-manuals-empty" data-manuals-empty hidden>
                <p>No manuals match your current search and filters.</p>
                <button type="button" class="pps-btn pps-btn-ghost" data-manuals-clear-empty>Clear all filters</button>
            </div>

            <div class="pps-manuals-results" data-manuals-results></div>
        </div>

        <div class="pps-prose">
            <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
    </div>
</section>
<?php get_footer();
