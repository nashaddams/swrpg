class Store {
  constructor() {
    if (!localStorage.getItem('swrpg')) {
      localStorage.setItem(
        'swrpg',
        JSON.stringify({
          stats: [
            {
              name: 'Soak Value',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Wounds',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Threshold',
                  value: 0,
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Current',
                  value: 0,
                },
              ],
            },
            {
              name: 'Strain',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Threshold',
                  value: 0,
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Current',
                  value: 0,
                },
              ],
            },
            {
              name: 'Defense',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Ranged',
                  value: 0,
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Melee',
                  value: 0,
                },
              ],
            },
          ],
          characteristics: [
            {
              name: 'Brawn',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Agility',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Intellect',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Cunning',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Willpower',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
            {
              name: 'Presence',
              items: [
                {
                  id: crypto.randomUUID(),
                  value: 0,
                },
              ],
            },
          ],
          skillGroups: [
            {
              name: 'General',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Astrogation (Int)',
                  career: true,
                  rank: [2, 1, 1, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Athletics (Br)',
                  career: true,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Charm (Pr)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Coercion (Will)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Computers (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Cool (Pr)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Coordination (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Deception (Cun)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Discipline (Will)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Leadership (Pr)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Mechanics (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Medicine (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Negotiation (Pr)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Perception (Cun)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Piloting - Planetary (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Piloting - Space (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Resilience (Br)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Skulduggery (Cun)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Stealth (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Streetwise (Cun)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Survival (Cun)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Vigilance (Will)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
              ],
            },
            {
              name: 'Combat',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Brawl (Br)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Gunnery (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Melee (Br)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Ranged - Light (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Ranged - Heavy (Ag)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
              ],
            },
            {
              name: 'Knowledge',
              items: [
                {
                  id: crypto.randomUUID(),
                  name: 'Core Worlds (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Education (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Lore (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Outer Rim (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Underworld (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Xenology (Int)',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
                {
                  id: crypto.randomUUID(),
                  name: 'Other:',
                  career: false,
                  rank: [0, 0, 0, 0, 0],
                },
              ],
            },
          ],
        })
      );
    }
  }

  #getStore() {
    return JSON.parse(localStorage.getItem('swrpg'));
  }

  createBackup() {
    return JSON.parse(localStorage.getItem('swrpg'));
  }

  applyBackup(store) {
    if (store) {
      localStorage.setItem('swrpg', JSON.stringify(store));
    }
  }

  getStats() {
    return this.#getStore().stats;
  }

  getCharacteristics() {
    return this.#getStore().characteristics;
  }

  getSkillGroups() {
    return this.#getStore().skillGroups;
  }

  setStat(id, value) {
    localStorage.setItem(
      'swrpg',
      JSON.stringify({
        ...this.#getStore(),
        stats: this.getStats().map((s) => {
          return {
            ...s,
            items: s.items.map((i) => {
              if (i.id === id) {
                i.value = value;
                return i;
              }
              return i;
            }),
          };
        }),
      })
    );
  }

  setCharacteristic(id, value) {
    localStorage.setItem(
      'swrpg',
      JSON.stringify({
        ...this.#getStore(),
        characteristics: this.getCharacteristics().map((c) => {
          return {
            ...c,
            items: c.items.map((i) => {
              if (i.id === id) {
                i.value = value;
                return i;
              }
              return i;
            }),
          };
        }),
      })
    );
  }

  toggleCareer(skillId) {
    localStorage.setItem(
      'swrpg',
      JSON.stringify({
        ...this.#getStore(),
        skillGroups: this.getSkillGroups().map((s) => {
          return {
            ...s,
            items: s.items.map((i) => {
              if (i.id === skillId) {
                i.career = !i.career;
                return i;
              }
              return i;
            }),
          };
        }),
      })
    );
  }

  toggleRank(skillId, rank) {
    localStorage.setItem(
      'swrpg',
      JSON.stringify({
        ...this.#getStore(),
        skillGroups: this.getSkillGroups().map((s) => {
          return {
            ...s,
            items: s.items.map((i) => {
              if (i.id === skillId) {
                i.rank[rank] = (i.rank[rank] + 1) % 3;
                return i;
              }
              return i;
            }),
          };
        }),
      })
    );
  }
}
