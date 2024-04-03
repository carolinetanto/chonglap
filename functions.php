<?php
// functions.php

function my_ajax_search_lite() {
    $search_query = $_POST['search_query'];

    // Perform search logic based on the $search_query
    // Retrieve search results from different post types and elements
    // Return the search results as a JSON response

    // Example:
    $args = array(
        'post_type' => array('post', 'page', 'custom_post_type'),
        's' => $search_query,
    );

    $search_results = new WP_Query($args);

    $results = array();
    if ($search_results->have_posts()) {
        while ($search_results->have_posts()) {
            $search_results->the_post();
            $results[] = array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
            );
        }
    }

    wp_reset_postdata();

    wp_send_json($results);
}

add_action('wp_ajax_my_ajax_search_lite', 'my_ajax_search_lite');
add_action('wp_ajax_nopriv_my_ajax_search_lite', 'my_ajax_search_lite');
?>