<?php
$user = wp_get_current_user();

?>
<form class="mk-ajax-form">
	<div class="profile-grid">
		<div>
			<label for="first_name"><?php _e( 'First Name', 'slottop' ); ?></label>
			<input type="text" name="first_name" id="first_name" value="<?php echo esc_attr( $user->first_name ); ?>">
		</div>
		<div>
			<label for="user_login"><?php _e( 'Username', 'slottop' ); ?></label>
			<input type="text" name="user_login" id="user_login" value="<?php echo esc_attr( $user->user_login ); ?>" readonly>
			<span style="color: #fff;"><?php _e( 'Usernames cannot be changed.', 'slottop' ); ?></span>
		</div>
		<div>
			<label for="last_name"><?php _e( 'Last Name', 'slottop' ); ?></label>
			<input type="text" name="last_name" id="last_name" value="<?php echo esc_attr( $user->last_name ); ?>">
		</div>
		<div>
			<label for="nickname"><?php _e( 'Nickname (required)', 'slottop' ); ?></label>
			<input type="text" name="nickname" id="nickname" value="<?php echo esc_attr( $user->nickname ); ?>">
		</div>
		<div>
			<label for="profession"><?php _e( 'Profession', 'slottop' ); ?></label>
			<input type="text" name="profession" id="profession" value="<?php echo esc_attr( get_user_meta($user->ID, 'profession', 1 ) ); ?>">
		</div>
		<div>
			<label for="email"><?php _e( 'Your e-mail address', 'slottop' ); ?></label>
			<input type="email" name="email" id="email" value="<?php echo esc_attr( $user->user_email ); ?>" required>
		</div>
		<div>
			<label for="description"><?php _e( 'Biographical Info', 'slottop' ); ?></label>
			<textarea name="description" id="description" rows="5" cols="30"><?php echo $user->description; // textarea_escaped ?></textarea>
			<p style="color: #fff;">Share a little biographical information to fill out your profile. This may be shown publicly.</p>
		</div>
		<div>
			<label for="display_name"><?php _e( 'Display name publicly as', 'slottop' ); ?></label>
			<select name="display_name" id="display_name">
				<?php
				$public_display                     = array();
				$public_display['display_nickname'] = $user->nickname;
				$public_display['display_username'] = $user->user_login;

				if ( ! empty( $user->first_name ) ) {
					$public_display['display_firstname'] = $user->first_name;
				}

				if ( ! empty( $user->last_name ) ) {
					$public_display['display_lastname'] = $user->last_name;
				}

				if ( ! empty( $user->first_name ) && ! empty( $user->last_name ) ) {
					$public_display['display_firstlast'] = $user->first_name . ' ' . $user->last_name;
					$public_display['display_lastfirst'] = $user->last_name . ' ' . $user->first_name;
				}

				if ( ! in_array( $user->display_name, $public_display, true ) ) { // Only add this if it isn't duplicated elsewhere.
					$public_display = array( 'display_displayname' => $user->display_name ) + $public_display;
				}

				$public_display = array_map( 'trim', $public_display );
				$public_display = array_unique( $public_display );

				?>
				<?php foreach ( $public_display as $id => $item ) : ?>
					<option <?php selected( $user->display_name, $item ); ?>><?php echo $item; ?></option>
				<?php endforeach; ?>
			</select>
		</div>


	</div>
	<?php mk_ajax::fields( 'profile_edit', 0 ); ?>
	<div class="avatar mk-mess" style="color: white">
		<div class="mk-mess-cont">
			<div>
                <img src="<?php echo get_template_directory_uri(); ?>/images/icon-1.svg" alt="Icon">
            </div>
			<div>
                <p>Registration complete! Check your inbox for your login details.</p>
            </div>
		</div>
	</div>
	<div class="profile-button">
		<button><?php _e( 'Save', 'slottop' ); ?></button>
	</div>
</form>