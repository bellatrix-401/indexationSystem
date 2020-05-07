package com.project.indexationsystem.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AppViewController {

    @Value("${server.instance.id}")
    private String instanceId;

    @GetMapping("/instance")
    @ResponseBody
    public ResponseEntity<Map<String, String>> getIndex() {
        Map<String, String> response = new HashMap<>();
        response.put("instanceId", instanceId); 

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}