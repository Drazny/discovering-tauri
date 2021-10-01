import { Component, OnInit } from '@angular/core';
import { FileEntry, readDir, readTextFile } from '@tauri-apps/api/fs';

@Component( {
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.less']
} )
export class DirectoryComponent implements OnInit {
  initialItems?: Array<FileEntry>;
  childrenItems?: Array<FileEntry>;
  editorOptions: {
    theme: string;
    language: string;
  };
  code: string;

  constructor () {
    this.editorOptions = {
      theme: 'vs-dark',
      language: 'text'
    };
    this.code = 'toto';
  }

  ngOnInit(): void {
    this.getChildren( './' ).then( res => {
      this.initialItems = [...res];
    } );
  }

  getChildren( dir: string ): Promise<Array<FileEntry>> {
    return readDir( dir );
  }

  printChildren( path: string ): void {
    this.getChildren( path ).then( res => {
      this.childrenItems = [...res];
    } );
  }

  editTextEditorContent( path: string, event: MouseEvent ): void {
    if ( event.shiftKey ) {
      console.log( event.shiftKey )
      window.open( '', '_blank' );
    } else {
      readTextFile( path ).then( text => {
        this.code = text;
      } );
    }
  }
}
