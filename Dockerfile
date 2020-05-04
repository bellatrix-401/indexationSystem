FROM openjdk:8-jdk-alpine

ARG JAR_FILE=target/isystem:1.0-SNAPSHOT.jar

ADD ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]