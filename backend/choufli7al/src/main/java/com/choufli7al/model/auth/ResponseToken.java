package com.choufli7al.model.auth;

 
import com.choufli7al.model.Utilisateurs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseToken {
private String token;
private Utilisateurs utilisateur;
}
