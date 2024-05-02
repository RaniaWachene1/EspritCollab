package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.User;

import java.util.ArrayList;
import java.util.List;

public interface IUserService {
    public static final List<User> USERS_LIST = new ArrayList<>();
    public void register(User user);
    public User login(User user) ;
    public void logout(String email) ;
    public List<User> findAll() ;

    }
