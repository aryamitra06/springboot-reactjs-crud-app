package com.springbootcrudserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//imported product model (entity) and service
import com.springbootcrudserver.entity.Product;
import com.springbootcrudserver.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService service;
	
	@PostMapping("/addproduct")
	@CrossOrigin(origins = "http://localhost:3000/")
	public void addProduct(@RequestBody Product product) {
		service.saveProduct(product);
	}
	
	@PostMapping("/addproducts")
	public void addProducts(@RequestBody List<Product> products) {
		service.saveProducts(products);
	}
	
	@GetMapping("/products")
	@CrossOrigin(origins = "http://localhost:3000/")
	public List<Product> findAllProducts(){
		return service.getProducts();
	}
	
	@GetMapping("/product/{id}")
	@CrossOrigin(origins = "http://localhost:3000/")
	public Product findProductById(@PathVariable int id) {
		return service.getProductById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	@CrossOrigin(origins = "http://localhost:3000/")
		public void deleteProduct(@PathVariable int id) {
			service.deleteProduct(id);
		}
	
	@PutMapping("/edit/{id}")
	@CrossOrigin(origins = "http://localhost:3000/")
		public void updateProduct(@RequestBody Product product, @PathVariable int id) {
			service.updateProduct(product, id);
		}
	}
