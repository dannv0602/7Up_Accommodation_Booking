package com.booking.config;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AuditorAwareService implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
        String username = loggedInUser.getName();

            return Optional.of(username);

    }
}
