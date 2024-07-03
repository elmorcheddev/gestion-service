package com.choufli7al.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {
    @JsonProperty("lat")
    private double lat;

    @JsonProperty("lng")
    private double lng;

    // Getters and setters
}