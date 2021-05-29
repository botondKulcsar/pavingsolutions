import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  currentTool: string = '';

  tools: any[] = [
    {
      name: 'Bobcat equipment',
      description: 'Bobcat equipment for rent',
      longDesc: 'Machine rental with operator We do landscaping work with Bobcat or Miniexcavator (loading rubble, digging foundations - earth leveling, cylindering etc). Hiring the working machine with the operator. Landscaping is done with Bobcat (loading debris - filling up the basics - grounding, digging with caterpillar excavation etc. )).',
      price: '100 lei',
      imgUrl : '../../../assets/tools/bobcat.jpg'
    },
    {
      name: 'Compactor',
      description: 'We offer Wacker compacting frog for rent.',
      longDesc: 'We offer Wacker compacting frog for rent.',
      price: '140 lei',
      imgUrl : '../../../assets/tools/compactor.jpg'
    },
    {
      name: 'Vibratory plate',
      description: 'We offer for rent Wacker compacting boards',
      longDes: 'We offer for rent Wacker compacting boards 50 kg, 140 kg 200 kg From 100,00 RON / day',
      price: '150 lei',
      imgUrl : '../../../assets/tools/vibrator.png'
    },
    {
      name: 'Paving stone guillotine',
      description: 'We rent pavement cutting guillotine.',
      longDesc: 'We rent pavement cutting guillotine. Features: Height max cutting: 12 cm Cutting: Manual (by pressing the handle)',
      price: '100 lei',
      imgUrl : '../../../assets/tools/guillotine.jpg'
    },
    {
      name: 'Soil drilling machine',
      description: 'Soil drilling machine for making holes in the ground',
      longDesc: 'Soil drill for various applications: fences, pillars, shrubs and young plants, etc.',
      price: '150 lei',
      imgUrl : '../../../assets/tools/soil-drill.jpg'
    },
    {
      name: 'Demolition hammer',
      description: 'Demolition hammer and rotopercutor for rent',
      longDesc: 'We rent a demolishing hammer and rotopercutor From 100 RON / day',
      price: '160 lei',
      imgUrl : '../../../assets/tools/demolition-hammer.jpg'
    },
    {
      name: 'Concrete vibrator',
      description: 'Concrete vibrator for rent',
      longDesc: 'Concrete vibrator is recommended for medium and large concrete vibration work.',
      price: '100 lei',
      imgUrl : '../../../assets/tools/concrete-vibrator.jpg'
    }

  ]

  showModal(tool: string): void {
    this.currentTool = tool;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
