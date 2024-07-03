package com.choufli7al.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.choufli7al.Utils.Utils.JwtUtils;
import com.choufli7al.configuration.CustomUserDetailService;
import com.choufli7al.model.Utilisateurs;
import com.choufli7al.model.auth.RequestToken;
import com.choufli7al.model.auth.ResponseToken;
import com.choufli7al.repository.UtilisateurRepo;
import com.choufli7al.service.UtilisateurService;
import com.choufli7al.service.impl.GeocodingService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/auth")
public class AuthentificationController {

	@Autowired
	private UtilisateurRepo utilisateurRepo;
	@Autowired
	private UtilisateurService utilisateurService;
	@Autowired
	private AuthenticationManager authenticationManager;
@Autowired
private GeocodingService geocodingService;
	@Autowired
	private CustomUserDetailService userDetailsService;

	@Autowired
	private JwtUtils jwtUtil;
	
	
	@GetMapping("/getConnectedUser")
	public ResponseEntity<Utilisateurs> getConnectedUser(HttpServletRequest request, HttpServletResponse response) {
		String token = request.getHeader("Authorization");

		if (token != null && token.startsWith("Bearer ")) {
			token = token.substring(7); // Remove "Bearer " prefix

			String username = jwtUtil.extractUsername(token);
			Utilisateurs utilisateurs = utilisateurService.findByEmail(username);

			return ResponseEntity.ok(utilisateurs);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
	@GetMapping("/distance")
	public double getDistance(@RequestParam String origin, @RequestParam String destination) {
	    return geocodingService.getDistance(origin, destination);
	}
	@PostMapping(value = "/login")
	public ResponseEntity<ResponseToken> authenticate(@RequestBody RequestToken request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
		final Utilisateurs user = utilisateurRepo.findByEmail(request.getUsername());
		final String jwt = jwtUtil.generateToken(userDetails);

		return ResponseEntity.ok(ResponseToken.builder().token(jwt).utilisateur(user).build());
	}
	@PostMapping(value = "/saveClient")
	public Utilisateurs ajouterClient(@RequestPart("utilisateur") Utilisateurs utilisateurs ,
			   @RequestPart("photo") MultipartFile photo) {
		try {
			utilisateurs.setPhoto(photo.getBytes());
			return utilisateurService.saveClient(utilisateurs);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	@PostMapping(value = "/saveAdmin")
	public Utilisateurs ajouterAdmin(@RequestBody Utilisateurs utilisateurs) {
		return utilisateurService.saveAdmin(utilisateurs);
	}
	@PostMapping(value = "/savePrest")
	public Utilisateurs ajouterPrestataire(@RequestPart("utilisateur") Utilisateurs utilisateurs ,
										   @RequestPart("photo") MultipartFile photo) {
		try {
			utilisateurs.setPhoto(photo.getBytes());
			return utilisateurService.savePrestataire(utilisateurs);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	
}
