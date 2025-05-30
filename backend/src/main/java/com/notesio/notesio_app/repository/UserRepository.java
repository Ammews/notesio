package com.notesio.notesio_app.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.notesio.notesio_app.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
}
