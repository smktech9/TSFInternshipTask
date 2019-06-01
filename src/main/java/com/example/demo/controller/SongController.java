package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.SongDetails;
import com.example.demo.repository.SongRepository;

@RestController
@RequestMapping("/song")
@CrossOrigin(origins= {"http://localhost:4200","http://localhost:4200/song","http://localhost:4200/song/change"},allowedHeaders="*")
public class SongController {
	
	@Autowired
	SongRepository songRepository;
	
	/*add song details*/
	@PostMapping("/addSong")
	public SongDetails createSongDetails(@Valid @RequestBody SongDetails song) {
		return songRepository.save(song);
	}
	
	/*get all song details*/
	@GetMapping("/getSongs")
	public List<SongDetails> getAllSongs(){
		return songRepository.findAll();
	}
	
	/*get song details by id*/
	@GetMapping("/getSong/{id}")
	public ResponseEntity<SongDetails> getSongById(@PathVariable(value="id") Long songid){
		
		SongDetails song = songRepository.getOne(songid);
		if(song==null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(song);
	}
	
	/*update song by id*/
	@PutMapping("/updateSong/{id}")
	public ResponseEntity<SongDetails> updateSong(@PathVariable(value="id") Long songid,@Valid @RequestBody SongDetails songDetails){
		
		SongDetails song=songRepository.getOne(songid);
		if(song==null)
		{
			return ResponseEntity.notFound().build();
		}
		song.setSong(songDetails.getSong());
		song.setSingers(songDetails.getSingers());
		song.setMovie(songDetails.getMovie());
		song.setComposer(songDetails.getComposer());
		song.setLyricist(songDetails.getLyricist());
		
		SongDetails updateSong = songRepository.save(song);
		return ResponseEntity.ok().body(updateSong);
		}

		/*Delete song by id*/
		@DeleteMapping("/deleteSong/{id}")
		public ResponseEntity<SongDetails> deleteSong(@PathVariable(value="id") Long songid){
			SongDetails song=songRepository.getOne(songid);
			if(song==null)
			{
				return ResponseEntity.notFound().build();
			}
			songRepository.delete(song);
			return ResponseEntity.ok().build();
		}
	

}
