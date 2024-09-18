class HyperTest {
  getInfo() {
    return {
      id: 'hypertest',
      name: 'please help me',
      blocks: [
        {
          opcode: 'convert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [TEXT] to [FORMAT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple'
            },
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
          }
        },
        {
          opcode: 'register',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create new xxx with [FORMAT] named [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Test'
            },
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'TYPE'
            }
          }
        },
        {
          opcode: 'getRandomNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get random number',
        }
      ],
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: [
            {
              text: 'UPPERCASE',
              value: 'up'
            },
            {
              text: 'lowercase',
              value: 'low'
            }
          ]
        },
        TYPE: {
          acceptReporters: true,
          items: [
            {
              text: '1',
              value: 'up'
            },
            {
              text: '2',
              value: 'low'
            }
          ]
        }
      }
    };
  }

  convert(args) {
    if (args.FORMAT === 'up') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }

  async getRandomNumber() {
    try {
      // Fetch random number from the Python backend
      const response = await fetch('http://127.0.0.1:5000/random-number');
      const data = await response.json();
      return data.test;  // Return the random number received from Python
    } catch (error) {
      console.error('Error fetching random number:', error);
      return 'Error';
    }
  }
}

Scratch.extensions.register(new HyperTest());
