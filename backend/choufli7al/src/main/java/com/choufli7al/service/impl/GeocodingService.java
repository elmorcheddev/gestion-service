package com.choufli7al.service.impl;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.choufli7al.api.GeocodingResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

//DistanceService.java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeocodingService {

 
 private final RestTemplate restTemplate;

 public GeocodingService(RestTemplate restTemplate) {
     this.restTemplate = restTemplate;
 }

 public double getDistance(String origin, String destination) {
     String url = "https://api-v2.distancematrix.ai/maps/api/distancematrix/json"
             + "?origins=" + origin
             + "&destinations=" + destination
             + "&key=LqFk4b4B4yxDFDP7lXro9VXDKsrBzeRiKz1Aw7wA1PFDmDwvyf3M7DIccek1rrJ8";

     String jsonResponse = restTemplate.getForObject(url, String.class);

     // Parse JSON response
     if (jsonResponse != null) {
         // Parse JSON and extract distance text
         double distanceText = parseDistanceFromJson(jsonResponse);
         return distanceText/1000;
     } else {
         return 0;
     }
 }

 public double parseDistanceFromJson(String distanceJson) {
	    // Parse the JSON and extract the distance value
	    try {
	        ObjectMapper objectMapper = new ObjectMapper();
	        JsonNode rootNode = objectMapper.readTree(distanceJson);
	        JsonNode rowsNode = rootNode.get("rows");
	        JsonNode elementsNode = rowsNode.get(0).get("elements");
	        JsonNode distanceNode = elementsNode.get(0).get("distance");
	        double distanceValue = distanceNode.get("value").asDouble();
	        // Distance might be in meters, you can convert it to kilometers or miles as needed
	        return distanceValue;
	    } catch (JsonProcessingException e) {
	        // Handle JSON parsing exception
	        e.printStackTrace();
	        return -1; // Or some default value indicating an error
	    }
	}

}
