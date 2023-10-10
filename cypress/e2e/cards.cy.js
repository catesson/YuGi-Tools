describe('Search a mikanko cards', () => {
    beforeEach(() => {
        cy.intercept("http://localhost:3001/cards/filter",
        {
            monsterRace: [
              { _id: 'Aqua' },
              { _id: 'Beast' },
              { _id: 'Beast-Warrior' },
              { _id: 'Creator-God' },
              { _id: 'Cyberse' },
              { _id: 'Dinosaur' },
              { _id: 'Divine-Beast' },
              { _id: 'Dragon' },
              { _id: 'Fairy' },
              { _id: 'Fiend' },
              { _id: 'Fish' },
              { _id: 'Illusion' },
              { _id: 'Insect' },
              { _id: 'Machine' },
              { _id: 'Plant' },
              { _id: 'Psychic' },
              { _id: 'Pyro' },
              { _id: 'Reptile' },
              { _id: 'Rock' },
              { _id: 'Sea Serpent' },
              { _id: 'Spellcaster' },
              { _id: 'Thunder' },
              { _id: 'Warrior' },
              { _id: 'Winged Beast' },
              { _id: 'Wyrm' },
              { _id: 'Zombie' }
            ],
            attribute: [
              { _id: 'DARK' },
              { _id: 'DIVINE' },
              { _id: 'EARTH' },
              { _id: 'FIRE' },
              { _id: 'LIGHT' },
              { _id: 'WATER' },
              { _id: 'WIND' }
            ],
            frameTypeMonster: [
              { _id: 'effect' },
              { _id: 'effect_pendulum' },
              { _id: 'fusion' },
              { _id: 'fusion_pendulum' },
              { _id: 'link' },
              { _id: 'normal' },
              { _id: 'normal_pendulum' },
              { _id: 'ritual' },
              { _id: 'ritual_pendulum' },
              { _id: 'synchro' },
              { _id: 'synchro_pendulum' },
              { _id: 'xyz' },
              { _id: 'xyz_pendulum' }
            ],
            magicRace: [
              { _id: 'Continuous' },
              { _id: 'Equip' },
              { _id: 'Field' },
              { _id: 'Normal' },
              { _id: 'Quick-Play' },
              { _id: 'Ritual' }
            ],
            trapRace: [ { _id: 'Continuous' }, { _id: 'Counter' }, { _id: 'Normal' } ]
          }
        )
        cy.intercept(
       {method: "POST",url: "http://localhost:3001/cards?name=mikanko&frameType="}, 
          {"cards": [
                
                {
                    "_id": "64e76e3be8d361e139523729",
                    "id": "17255673",
                    "name": "Heavenly Gate of the Mikanko",
                    "type": "Spell Card",
                    "frameType": "spell",
                    "desc": "While you control a monster that is equipped with an Equip Card, all monsters your opponent controls that can attack must attack monsters equipped with Equip Cards. If your \"Mikanko\" monster battles, your opponent cannot activate cards or effects until the end of the Damage Step. At the end of the Damage Step, if your \"Mikanko\" monster attacked: You can send 1 Equip Card you control to the GY; it can make another attack on a monster in a row.",
                    "race": "Field",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "17255673",
                            "image_url": "https://images.ygoprodeck.com/images/cards/17255673.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/17255673.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/17255673.jpg",
                            "_id": "64e76e3be8d361e13952372a"
                        }
                    ],
                    "__v": 0
                },
                {
                    "_id": "64e76e3be8d361e13952653f",
                    "id": "44649322",
                    "name": "The Great Mikanko Ceremony",
                    "type": "Spell Card",
                    "frameType": "spell",
                    "desc": "Special Summon 1 \"Mikanko\" monster from your hand, ignoring its Summoning conditions, but return it to the hand during your opponent's End Phase. During your Main Phase: You can banish this card from your GY; send 1 \"Mikanko\" card from your Deck to the GY, except \"The Great Mikanko Ceremony\". You can only use each effect of \"The Great Mikanko Ceremony\" once per turn.",
                    "race": "Quick-Play",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "44649322",
                            "image_url": "https://images.ygoprodeck.com/images/cards/44649322.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/44649322.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/44649322.jpg",
                            "_id": "64e76e3be8d361e139526540"
                        }
                    ],
                    "__v": 0
                }
            ],
            "maxPage": 1
        }
    ),
    cy.intercept(
        "http://localhost:3001/cards?name=mikanko&level=3&scale=&frameType=&attribute=&race=&type=Monster", 
        {
            "cards": [
                {
                    "_id": "64e76e3be8d361e139524a2d",
                    "id": "54862960",
                    "name": "Ni-Ni the Mirror Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. During your opponent's turn, while this card is equipped with an Equip Card (Quick Effect): You can target 1 face-up monster your opponent controls; take control of it until the End Phase. You can only use this effect of \"Ni-Ni the Mirror Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Spellcaster",
                    "attribute": "WATER",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "54862960",
                            "image_url": "https://images.ygoprodeck.com/images/cards/54862960.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/54862960.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/54862960.jpg",
                            "_id": "64e76e3be8d361e139524a2e"
                        }
                    ],
                    "__v": 0
                },
                {
                    "_id": "64e76e3be8d361e139523674",
                    "id": "18377261",
                    "name": "Ha-Re the Sword Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. If an Equip Card becomes equipped to this card: You can add 1 \"Mikanko\" Equip Spell from your Deck to your hand. You can only use this effect of \"Ha-Re the Sword Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Warrior",
                    "attribute": "FIRE",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "18377261",
                            "image_url": "https://images.ygoprodeck.com/images/cards/18377261.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/18377261.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/18377261.jpg",
                            "_id": "64e76e3be8d361e139523675"
                        }
                    ],
                    "__v": 0
                },
                {
                    "_id": "64e76e3be8d361e1395238c4",
                    "id": "6327734",
                    "name": "Hu-Li the Jewel Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. While you control an Equip Card, your opponent cannot target \"Mikanko\" cards you control with card effects. If either player equips an Equip Card(s) to this card: You can add 1 \"Mikanko\" Trap from your Deck to your hand. You can only use this effect of \"Hu-Li the Jewel Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Psychic",
                    "attribute": "WIND",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "6327734",
                            "image_url": "https://images.ygoprodeck.com/images/cards/6327734.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/6327734.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/6327734.jpg",
                            "_id": "64e76e3be8d361e1395238c5"
                        }
                    ],
                    "__v": 0
                }
                
            ],
            "maxPage": 1
        }
    ),
    cy.intercept(
        "http://localhost:3001/cards?name=mikanko&level=3&scale=&frameType=&attribute=FIRE&race=&type=Monster", 
        {
            "cards": [
               
                {
                    "_id": "64e76e3be8d361e139523674",
                    "id": "18377261",
                    "name": "Ha-Re the Sword Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. If an Equip Card becomes equipped to this card: You can add 1 \"Mikanko\" Equip Spell from your Deck to your hand. You can only use this effect of \"Ha-Re the Sword Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Warrior",
                    "attribute": "FIRE",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "18377261",
                            "image_url": "https://images.ygoprodeck.com/images/cards/18377261.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/18377261.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/18377261.jpg",
                            "_id": "64e76e3be8d361e139523675"
                        }
                    ],
                    "__v": 0
                }
            ],
            "maxPage": 1
        }
    ),cy.intercept(
        "http://localhost:3001/cards?name=mikanko&level=3&scale=&frameType=&attribute=FIRE&race=&type=Monster", 
        {
            "cards": [
               
                {
                    "_id": "64e76e3be8d361e139523674",
                    "id": "18377261",
                    "name": "Ha-Re the Sword Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. If an Equip Card becomes equipped to this card: You can add 1 \"Mikanko\" Equip Spell from your Deck to your hand. You can only use this effect of \"Ha-Re the Sword Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Warrior",
                    "attribute": "FIRE",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "18377261",
                            "image_url": "https://images.ygoprodeck.com/images/cards/18377261.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/18377261.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/18377261.jpg",
                            "_id": "64e76e3be8d361e139523675"
                        }
                    ],
                    "__v": 0
                }
            ],
            "maxPage": 1
        }
    ),
    cy.intercept(
        "http://localhost:3001/cards?name=mikanko&level=3&scale=&frameType=&attribute=FIRE&race=Warrior&type=Monster", 
        {
            "cards": [
               
                {
                    "_id": "64e76e3be8d361e139523674",
                    "id": "18377261",
                    "name": "Ha-Re the Sword Mikanko",
                    "type": "Effect Monster",
                    "frameType": "effect",
                    "desc": "If this card is not equipped with an Equip Card, you take no damage from battles involving this card. If this card is equipped with an Equip Card, it cannot be destroyed by battle and your opponent takes any battle damage you would have taken from battles involving this card. If an Equip Card becomes equipped to this card: You can add 1 \"Mikanko\" Equip Spell from your Deck to your hand. You can only use this effect of \"Ha-Re the Sword Mikanko\" once per turn.",
                    "atk": "0",
                    "def": "0",
                    "level": "3",
                    "race": "Warrior",
                    "attribute": "FIRE",
                    "archetype": "Mikanko",
                    "card_images": [
                        {
                            "id": "18377261",
                            "image_url": "https://images.ygoprodeck.com/images/cards/18377261.jpg",
                            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/18377261.jpg",
                            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/18377261.jpg",
                            "_id": "64e76e3be8d361e139523675"
                        }
                    ],
                    "__v": 0
                }
            ],
            "maxPage": 1
        }
    )})
    
    it('search with a name, lv, attribute, race', () => {
      cy.visit('/cards')
      cy.get('input[id=name]').type('mikanko')
      cy.get('button[name=submitSearchForm]').click()
      cy.get('h2').should('contain', 'Heavenly Gate of the Mikanko')
      cy.get('button[name=MonsterOnglet]').click()
      cy.get('input[data-test-id=MonsterLevel]').type('3')
      cy.get('button[name=submitSearchForm]').click()
      cy.get('h2').should('contain', 'Ni-Ni the Mirror Mikanko')
      cy.get('select[data-test-id=Attribute]').select("FIRE") 
      cy.get('button[name=submitSearchForm]').click()
      cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
      cy.get('select[data-test-id=Race]').select("Warrior") 
      cy.get('button[name=submitSearchForm]').click()
      cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
    })
  })