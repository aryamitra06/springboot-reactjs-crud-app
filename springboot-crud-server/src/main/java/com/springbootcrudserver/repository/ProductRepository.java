package com.springbootcrudserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootcrudserver.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
}
