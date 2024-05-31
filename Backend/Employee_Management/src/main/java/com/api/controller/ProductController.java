package com.api.controller;

import com.api.entity.Product;
import com.api.helper.Helper;
import com.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@CrossOrigin("*")
@CrossOrigin(
	    origins = {"*"}
	)
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/product/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
        if (Helper.checkExcelFormat(file)) {
            //true

            this.productService.save(file);

            return ResponseEntity.ok(Map.of("message", "File is uploaded and data is saved to db"));


        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
    }

    
    
    @PostMapping("/product")
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        try {
            productService.saveProduct(product);
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
//    @PostMapping("/login")
//    
//    	public String login(@RequestBody Product product)
//    	{
//    		  Authentication authentication= 
//    	}
//    
//   
    
    @GetMapping("/product")
    public List<Product> getAllProduct() {
        return this.productService.getAllProducts();
    }
    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") Integer id) {
        try {
            Optional<Product> productOptional = productService.getProductById(id);
            if (productOptional.isPresent()) {
                return new ResponseEntity<>(productOptional.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception ex) {
            return new ResponseEntity<>("An error occurred while fetching the product", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @PutMapping("/product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable("id") Integer empid, @RequestBody Product productDetails) {
        try {
            Optional<Product> productOptional = productService.getProductById(empid);

            if (!productOptional.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            productDetails.setEmpid(empid);
            productService.saveProduct(productDetails);

            return ResponseEntity.noContent().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while updating the product");
        }
    }

    
    @DeleteMapping("/product/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") Integer empid) {
        try {
            productService.deleteById(empid);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EmptyResultDataAccessException ex) {
            // If the product with the given ID does not exist
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception ex) {
            // For any other errors
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
   

}
