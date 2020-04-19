/*package com.project.indexationsystem.controllers;

import static org.junit.Assert.assertThat;

import java.util.List;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.services.NewsService;

import org.hamcrest.core.IsEqual;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class IndexationControllerIntegrationTest {

  @Autowired
  private TestEntityManager entityManager;

  @Autowired
  private NewsService newsService;

  @Test
  public void getAllTest() {
    News urlTest = new News("https://twitter.com/YesidR05/status/1244688487833632769");
    entityManager.persist(urlTest);
    entityManager.flush();

    List<News> found = newsService.getAll();

    assertThat(found.size(), is(1));
  }
}*/