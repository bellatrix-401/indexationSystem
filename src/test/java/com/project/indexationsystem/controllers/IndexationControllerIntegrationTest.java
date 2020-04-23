package com.project.indexationsystem.controllers;

/*
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(
  webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
public class IndexationControllerIntegrationTest {
  

  @LocalServerPort
  private int port;

  TestRestTemplate restTemplate = new TestRestTemplate();

  HttpHeaders headers = new HttpHeaders();

  @Test
  public void testGetAll() throws Exception {

    HttpEntity<String> entity = new HttpEntity<String>(null, headers);

    ResponseEntity<String> response = restTemplate.exchange(
      createURLWithPort("/api/content"), HttpMethod.GET, entity, String.class
    );

    String expected = "[{\"id\":1,\"url\":\"http://google.com\"}]";

    JSONAssert.assertEquals(expected, response.getBody(), false);

  }

  private String createURLWithPort (String uri) {
    return "http://localhost:"+port+uri;
  }

  
}
*/