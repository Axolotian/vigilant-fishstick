class AxoTest {
  getInfo() {
    return {
      id: 'axotest',
      name: 'Test',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'test'
        },        
        {
          opcode: 'test',
          blockType: Scratch.BlockType.REPORTER,
          text: 'test'
        }.
        {
          opcode: 'testwithargs',
          blockType: Scratch.BlockType.REPORTER,
          text: 'testwithargs[INPUT]'
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING
            }
          }
        }
      ]
    };
  }

  hello() {
    return 'Axolotls!';
  }
  test() {
  pass
  }
  testwithargs(){
  	return INPUT;
  }
}

Scratch.extensions.register(new AxoTest());
