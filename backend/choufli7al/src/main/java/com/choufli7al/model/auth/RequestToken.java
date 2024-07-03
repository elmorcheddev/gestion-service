package com.choufli7al.model.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RequestToken {
private String username, password;
}
