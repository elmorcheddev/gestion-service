package com.choufli7al.configuration;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
 import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

 
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailService ourUserDetailsService;
    @Autowired
    private ApplicationRequestFilter jwtAuthFIlter;

    @Bean
      SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults()) 
                .authorizeHttpRequests(request -> request.requestMatchers("/auth/**").permitAll()
						.requestMatchers("/api/cat/allCat").permitAll()
						.requestMatchers("/api/cat/allcatAdmin").permitAll()
                									.requestMatchers("/api/comm/all").permitAll()
                									.requestMatchers("/api/comm/findById/**").permitAll()
                									.requestMatchers("/api/comm/categories/**").permitAll()
                									.requestMatchers("/api/comm/competence/**").permitAll()
                									.requestMatchers("/api/review/listreviewByComp/**").permitAll()
                									.requestMatchers("/api/dep/listdep").permitAll()
                 									.requestMatchers("/api/etat/listetat").permitAll()
                 									.requestMatchers("/api/utilisateur/byemail/**").permitAll()
                 									.requestMatchers("/api/comm/getByadresse**").permitAll()
                									.requestMatchers("/api/comm/competencies**").permitAll()
                									.requestMatchers("/api/review/rating/**").permitAll()
                         .anyRequest().authenticated())
                .sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider()).addFilterBefore(
                        jwtAuthFIlter, UsernamePasswordAuthenticationFilter.class
                );
        return httpSecurity.build();
    }

    @Bean
      AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(ourUserDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthenticationProvider;
    }

    @Bean
      BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
      AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
