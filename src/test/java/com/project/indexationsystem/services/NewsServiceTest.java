package com.project.indexationsystem.services;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.repository.NewsRepository;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Profile("test")
@ActiveProfiles("test")
public class NewsServiceTest {

  @Autowired 
  private NewsRepository newsRepository;

  String url = "https://stackoverflow.com";

  @Test
  public void saveTest() {
    News newsData = new News(url);
    NewsService newsService = new NewsService(newsRepository);
    newsService.save(newsData);

    assertEquals(newsRepository.count(), 1);
  }

  @Test
  public void saveTestRepeited() {
    News newsData = new News(url);
    NewsService newsService = new NewsService(newsRepository);
    newsService.save(newsData);

    assertEquals(newsRepository.count(), 1);
  }

  @Test
  public void getAllTest() {
    NewsService newsService = new NewsService(newsRepository);
    News result = newsService.getAll().get(0);

    assertEquals(url, result.getUrl());
  }

  @Test
  public void deleteTest() {
    NewsService newsService = new NewsService(newsRepository);
    newsService.delete(url);

    assertEquals(newsRepository.count(), 0);
  }

  @Test
  public void deleteTestFailed() {
    NewsService newsService = new NewsService(newsRepository);
    newsService.delete("http://somerareurl.com");

    assertEquals(newsRepository.count(), 1);
  }
}