package com.choufli7al.api;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GeocodingResponse {
    @JsonProperty("results")
    private List<GeocodingResult> results;

    // Getters and setters
}