<?php
/**
 * Theme footer.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$quick_links = pps_quick_links_data();
$services    = pps_services_data();
$sectors     = pps_sector_data();
?>
</main>
<footer class="pps-footer">
    <div class="pps-container pps-footer-grid">
        <div>
            <img class="pps-footer-logo" src="<?php echo esc_url(pps_image_url('logo-secondary.svg')); ?>" alt="Power Protection Services" />
            <p>
                Independent UPS installation, battery replacement, generator supply and maintenance support for
                critical power infrastructure across the UK.
            </p>
        </div>
        <div>
            <h4>Quick Links</h4>
            <ul>
                <?php foreach ($quick_links as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['label']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div>
            <h4>Services</h4>
            <ul>
                <?php foreach ($services as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div>
            <h4>Who We Help</h4>
            <ul>
                <?php foreach ($sectors as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div>
            <h4>Contact</h4>
            <ul>
                <li><a href="mailto:contact@powerprotectionservices.co.uk">contact@powerprotectionservices.co.uk</a></li>
                <li><a href="tel:01488685207">01488 685207</a></li>
                <li>Power Protection Services Ltd<br />Unit 2 Neates Yard<br />Hungerford<br />Berkshire RG17 0NB</li>
            </ul>
        </div>
    </div>

    <div class="pps-footer-legal">
        <div class="pps-container">
            <p>&copy; <?php echo esc_html(wp_date('Y')); ?> Power Protection Services. All rights reserved.</p>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
