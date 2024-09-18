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

  convert (args) {
    if (args.FORMAT === 'up') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
}
Scratch.extensions.register(new HyperTest());
