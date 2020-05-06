FROM openjdk:8-jdk-alpine

ARG JAR_FILE=target/isystem:1.0-SNAPSHOT.jar

ADD ${JAR_FILE} app.jar

ARG mysql_host=docker-mysql
ARG mysql_root_password=root
ARG mysql_database=db_news

ENV MYSQL_HOST ${mysql_host}
ENV MYSQL_ROOT_PASSWORD ${mysql_root_password}
ENV MYSQL_DATABASE ${mysql_database}

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]