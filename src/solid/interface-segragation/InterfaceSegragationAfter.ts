// Princípio da Segregação de Interface (Interface Segregation Principle - ISP) - implementação correta

//  Interfaces específicas que definem apenas os métodos necessários para cada classe no contexto
interface Workable {
  work(): void;
}

interface ReportFiler {
  fileReport(): void;
}

interface MeetindAttendee {
  attendMeeting(): void;
}

class Dev implements Workable, ReportFiler {
  work(): void {
    console.log("Writing code...");
  }

  fileReport(): void {
    console.log("Filing report...");
  }
}

class Manager implements Workable, MeetindAttendee {
  work(): void {
    console.log("Managing team...");
  }

  attendMeeting(): void {
    console.log("Attending meeting...");
  }
}
