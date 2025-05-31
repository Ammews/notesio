package com.notesio.notesio_app.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id = ObjectId.get();
    private String name;
    private String email;
    private String password;

}
