package com.springbootcrudserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootcrudserver.entity.Product;
import com.springbootcrudserver.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repository;
	
	//save only one product
	public void saveProduct(Product product) {
		repository.save(product);
	}
	
	//save multiple products
	public void saveProducts(List<Product> products){
		repository.saveAll(products);
	}
	
	//fetch all products
	public List<Product> getProducts(){
		return repository.findAll();
	}
	
	//fetch product by id
	public Product getProductById(int id) {
		return repository.findById(id).orElse(null);
	}
	
	//delete product (by id)
	public String deleteProduct(int id) {
		repository.deleteById(id);
		return "Product has been deleted "+id;
	}
	
	//update product
//	public Product updateProduct(Product product) {
//		Product existingProduct = repository.findById(product.getId()).orElse(null);
//		existingProduct.setName(product.getName());
//		existingProduct.setDesc(product.getDesc());
//		existingProduct.setImgUrl(product.getImgUrl());
//		existingProduct.setQuantity(product.getQuantity());
//		existingProduct.setOriginalPrice(product.getOriginalPrice());
//		existingProduct.setDiscount(product.getDiscount());
//		return repository.save(existingProduct);
//	}
	public Product updateProduct(Product product, int id) {
	Product existingProduct = repository.findById(id).orElse(null);
		existingProduct.setName(product.getName());
		existingProduct.setDesc(product.getDesc());
		existingProduct.setImgUrl(product.getImgUrl());
		existingProduct.setQuantity(product.getQuantity());
		existingProduct.setOriginalPrice(product.getOriginalPrice());
		existingProduct.setDiscount(product.getDiscount());
		return repository.save(existingProduct);
}
	
}
