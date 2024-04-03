import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit {
  temperature: number = 0;
  scaleLabels = ['-100°C', '-90°C', '-80°C', '-70°C', '-60°C', '-50°C', '-40°C', '-30°C', '-20°C', '-10°C', '-0°C'];
  mercuryColor: string = '#f00'; 
  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, 'temperatura');
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      this.temperature = valores_db;

      if (valores_db < 0) {
        this.temperature = 0;
      }

      if (valores_db < 20 && valores_db > 0) {
        this.mercuryColor = 'blue';
      } else if (valores_db >= 20 && valores_db < 60) {
        this.mercuryColor = 'orange';
        }else if (valores_db <= 0) {
          this.mercuryColor = 'skyblue';
        }else {
        this.mercuryColor = 'red';
      }
    });
  }
}